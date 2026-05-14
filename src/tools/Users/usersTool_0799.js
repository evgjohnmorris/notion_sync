/**
 * Generated Tool: usersTool_0799
 * Domain: Users
 * ID: 0799
 */
exports.usersTool_0799 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0799:', error);
    throw error;
  }
};
