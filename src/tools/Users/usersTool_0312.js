/**
 * Generated Tool: usersTool_0312
 * Domain: Users
 * ID: 0312
 */
exports.usersTool_0312 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0312:', error);
    throw error;
  }
};
