/**
 * Generated Tool: usersTool_0752
 * Domain: Users
 * ID: 0752
 */
exports.usersTool_0752 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0752:', error);
    throw error;
  }
};
