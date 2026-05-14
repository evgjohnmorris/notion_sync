/**
 * Generated Tool: workspacesTool_0356
 * Domain: Workspaces
 * ID: 0356
 */
exports.workspacesTool_0356 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0356:', error);
    throw error;
  }
};
