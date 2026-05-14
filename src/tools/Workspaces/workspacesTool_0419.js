/**
 * Generated Tool: workspacesTool_0419
 * Domain: Workspaces
 * ID: 0419
 */
exports.workspacesTool_0419 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0419:', error);
    throw error;
  }
};
