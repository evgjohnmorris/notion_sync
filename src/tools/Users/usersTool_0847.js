/**
 * Generated Tool: usersTool_0847
 * Domain: Users
 * ID: 0847
 */
exports.usersTool_0847 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0847:', error);
    throw error;
  }
};
