/**
 * Generated Tool: blocksTool_0559
 * Domain: Blocks
 * ID: 0559
 */
exports.blocksTool_0559 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0559:', error);
    throw error;
  }
};
