/**
 * Generated Tool: usersTool_0656
 * Domain: Users
 * ID: 0656
 */
exports.usersTool_0656 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0656:', error);
    throw error;
  }
};
