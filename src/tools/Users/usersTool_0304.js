/**
 * Generated Tool: usersTool_0304
 * Domain: Users
 * ID: 0304
 */
exports.usersTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0304:', error);
    throw error;
  }
};
