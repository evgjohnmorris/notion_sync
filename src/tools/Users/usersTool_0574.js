/**
 * Generated Tool: usersTool_0574
 * Domain: Users
 * ID: 0574
 */
exports.usersTool_0574 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0574:', error);
    throw error;
  }
};
