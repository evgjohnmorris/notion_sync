/**
 * Generated Tool: usersTool_0386
 * Domain: Users
 * ID: 0386
 */
exports.usersTool_0386 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0386:', error);
    throw error;
  }
};
