/**
 * Generated Tool: usersTool_0884
 * Domain: Users
 * ID: 0884
 */
exports.usersTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0884:', error);
    throw error;
  }
};
