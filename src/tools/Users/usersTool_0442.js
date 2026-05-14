/**
 * Generated Tool: usersTool_0442
 * Domain: Users
 * ID: 0442
 */
exports.usersTool_0442 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0442:', error);
    throw error;
  }
};
