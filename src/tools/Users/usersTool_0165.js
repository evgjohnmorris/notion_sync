/**
 * Generated Tool: usersTool_0165
 * Domain: Users
 * ID: 0165
 */
exports.usersTool_0165 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0165:', error);
    throw error;
  }
};
