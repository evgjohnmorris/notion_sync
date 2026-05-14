/**
 * Generated Tool: workspacesTool_0567
 * Domain: Workspaces
 * ID: 0567
 */
exports.workspacesTool_0567 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0567:', error);
    throw error;
  }
};
