/**
 * Generated Tool: usersTool_0018
 * Domain: Users
 * ID: 0018
 */
exports.usersTool_0018 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0018:', error);
    throw error;
  }
};
