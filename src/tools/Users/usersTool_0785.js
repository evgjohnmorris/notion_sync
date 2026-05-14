/**
 * Generated Tool: usersTool_0785
 * Domain: Users
 * ID: 0785
 */
exports.usersTool_0785 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0785:', error);
    throw error;
  }
};
