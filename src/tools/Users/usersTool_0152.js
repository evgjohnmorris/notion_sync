/**
 * Generated Tool: usersTool_0152
 * Domain: Users
 * ID: 0152
 */
exports.usersTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0152:', error);
    throw error;
  }
};
