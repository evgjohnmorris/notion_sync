/**
 * Generated Tool: usersTool_0661
 * Domain: Users
 * ID: 0661
 */
exports.usersTool_0661 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0661:', error);
    throw error;
  }
};
