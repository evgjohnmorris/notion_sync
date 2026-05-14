/**
 * Generated Tool: usersTool_0076
 * Domain: Users
 * ID: 0076
 */
exports.usersTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0076:', error);
    throw error;
  }
};
