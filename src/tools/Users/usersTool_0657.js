/**
 * Generated Tool: usersTool_0657
 * Domain: Users
 * ID: 0657
 */
exports.usersTool_0657 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0657:', error);
    throw error;
  }
};
