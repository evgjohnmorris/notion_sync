/**
 * Generated Tool: usersTool_0906
 * Domain: Users
 * ID: 0906
 */
exports.usersTool_0906 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0906:', error);
    throw error;
  }
};
