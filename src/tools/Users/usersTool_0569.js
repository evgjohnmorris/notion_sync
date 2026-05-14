/**
 * Generated Tool: usersTool_0569
 * Domain: Users
 * ID: 0569
 */
exports.usersTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0569:', error);
    throw error;
  }
};
