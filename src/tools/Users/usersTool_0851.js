/**
 * Generated Tool: usersTool_0851
 * Domain: Users
 * ID: 0851
 */
exports.usersTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0851:', error);
    throw error;
  }
};
