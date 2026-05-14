/**
 * Generated Tool: usersTool_0199
 * Domain: Users
 * ID: 0199
 */
exports.usersTool_0199 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0199:', error);
    throw error;
  }
};
