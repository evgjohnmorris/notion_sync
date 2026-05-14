/**
 * Generated Tool: blocksTool_0818
 * Domain: Blocks
 * ID: 0818
 */
exports.blocksTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0818:', error);
    throw error;
  }
};
