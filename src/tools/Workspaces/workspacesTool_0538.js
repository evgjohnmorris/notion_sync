/**
 * Generated Tool: workspacesTool_0538
 * Domain: Workspaces
 * ID: 0538
 */
exports.workspacesTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0538:', error);
    throw error;
  }
};
