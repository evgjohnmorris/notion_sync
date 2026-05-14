/**
 * Generated Tool: usersTool_0757
 * Domain: Users
 * ID: 0757
 */
exports.usersTool_0757 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0757:', error);
    throw error;
  }
};
