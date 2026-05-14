/**
 * Generated Tool: blocksTool_0141
 * Domain: Blocks
 * ID: 0141
 */
exports.blocksTool_0141 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0141:', error);
    throw error;
  }
};
