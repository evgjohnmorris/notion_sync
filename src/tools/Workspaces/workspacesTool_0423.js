/**
 * Generated Tool: workspacesTool_0423
 * Domain: Workspaces
 * ID: 0423
 */
exports.workspacesTool_0423 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0423:', error);
    throw error;
  }
};
