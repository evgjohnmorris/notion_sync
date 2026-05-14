/**
 * Generated Tool: usersTool_0538
 * Domain: Users
 * ID: 0538
 */
exports.usersTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0538:', error);
    throw error;
  }
};
