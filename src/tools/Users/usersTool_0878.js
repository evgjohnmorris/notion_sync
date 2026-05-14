/**
 * Generated Tool: usersTool_0878
 * Domain: Users
 * ID: 0878
 */
exports.usersTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0878:', error);
    throw error;
  }
};
