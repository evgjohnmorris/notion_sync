/**
 * Generated Tool: usersTool_0139
 * Domain: Users
 * ID: 0139
 */
exports.usersTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0139:', error);
    throw error;
  }
};
