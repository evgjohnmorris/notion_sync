/**
 * Generated Tool: usersTool_0294
 * Domain: Users
 * ID: 0294
 */
exports.usersTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0294:', error);
    throw error;
  }
};
