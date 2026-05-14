/**
 * Generated Tool: usersTool_0555
 * Domain: Users
 * ID: 0555
 */
exports.usersTool_0555 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0555:', error);
    throw error;
  }
};
