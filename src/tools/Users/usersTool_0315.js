/**
 * Generated Tool: usersTool_0315
 * Domain: Users
 * ID: 0315
 */
exports.usersTool_0315 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0315:', error);
    throw error;
  }
};
