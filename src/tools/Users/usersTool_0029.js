/**
 * Generated Tool: usersTool_0029
 * Domain: Users
 * ID: 0029
 */
exports.usersTool_0029 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0029:', error);
    throw error;
  }
};
