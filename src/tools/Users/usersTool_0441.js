/**
 * Generated Tool: usersTool_0441
 * Domain: Users
 * ID: 0441
 */
exports.usersTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0441:', error);
    throw error;
  }
};
