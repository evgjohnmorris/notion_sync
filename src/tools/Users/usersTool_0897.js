/**
 * Generated Tool: usersTool_0897
 * Domain: Users
 * ID: 0897
 */
exports.usersTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0897:', error);
    throw error;
  }
};
