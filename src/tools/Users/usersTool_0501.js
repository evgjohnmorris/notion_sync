/**
 * Generated Tool: usersTool_0501
 * Domain: Users
 * ID: 0501
 */
exports.usersTool_0501 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0501:', error);
    throw error;
  }
};
