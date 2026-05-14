/**
 * Generated Tool: workspacesTool_0577
 * Domain: Workspaces
 * ID: 0577
 */
exports.workspacesTool_0577 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0577:', error);
    throw error;
  }
};
