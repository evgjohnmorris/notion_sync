/**
 * Generated Tool: usersTool_0055
 * Domain: Users
 * ID: 0055
 */
exports.usersTool_0055 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0055:', error);
    throw error;
  }
};
