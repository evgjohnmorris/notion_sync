/**
 * Generated Tool: usersTool_0485
 * Domain: Users
 * ID: 0485
 */
exports.usersTool_0485 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0485:', error);
    throw error;
  }
};
