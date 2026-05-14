/**
 * Generated Tool: blocksTool_0797
 * Domain: Blocks
 * ID: 0797
 */
exports.blocksTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0797:', error);
    throw error;
  }
};
