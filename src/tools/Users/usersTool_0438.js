/**
 * Generated Tool: usersTool_0438
 * Domain: Users
 * ID: 0438
 */
exports.usersTool_0438 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0438:', error);
    throw error;
  }
};
