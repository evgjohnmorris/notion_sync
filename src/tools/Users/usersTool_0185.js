/**
 * Generated Tool: usersTool_0185
 * Domain: Users
 * ID: 0185
 */
exports.usersTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0185:', error);
    throw error;
  }
};
