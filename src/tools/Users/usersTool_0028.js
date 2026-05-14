/**
 * Generated Tool: usersTool_0028
 * Domain: Users
 * ID: 0028
 */
exports.usersTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0028:', error);
    throw error;
  }
};
