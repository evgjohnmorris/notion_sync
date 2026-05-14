/**
 * Generated Tool: usersTool_0299
 * Domain: Users
 * ID: 0299
 */
exports.usersTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0299:', error);
    throw error;
  }
};
