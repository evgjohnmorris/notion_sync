/**
 * Generated Tool: blocksTool_0504
 * Domain: Blocks
 * ID: 0504
 */
exports.blocksTool_0504 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0504:', error);
    throw error;
  }
};
