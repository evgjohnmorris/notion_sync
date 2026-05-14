/**
 * Generated Tool: usersTool_0597
 * Domain: Users
 * ID: 0597
 */
exports.usersTool_0597 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0597:', error);
    throw error;
  }
};
