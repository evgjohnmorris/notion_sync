/**
 * Generated Tool: usersTool_0140
 * Domain: Users
 * ID: 0140
 */
exports.usersTool_0140 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0140:', error);
    throw error;
  }
};
