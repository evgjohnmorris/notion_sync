/**
 * Generated Tool: usersTool_0735
 * Domain: Users
 * ID: 0735
 */
exports.usersTool_0735 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0735:', error);
    throw error;
  }
};
