/**
 * Generated Tool: usersTool_0983
 * Domain: Users
 * ID: 0983
 */
exports.usersTool_0983 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0983:', error);
    throw error;
  }
};
